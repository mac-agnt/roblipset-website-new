'use client';

import React, { useRef, useId, useEffect, CSSProperties } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';

interface AnimationConfig {
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface ShadowOverlayProps {
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
}

function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
): number {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
    const id = useId();
    const cleanId = id.replace(/:/g, "");
    return `shadowoverlay-${cleanId}`;
};

export function Component({
    color = 'rgba(207, 167, 119, 1)',
    animation,
    noise,
    style,
    className
}: ShadowOverlayProps) {
    const id = useInstanceId();
    const animationEnabled = animation && animation.scale > 0;
    const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
    const hueRotateMotionValue = useMotionValue(0);
    const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);

    // Animation speed: higher = faster
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 20, 1) : 10;
    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 50, 200) : 100;

    useEffect(() => {
        if (feColorMatrixRef.current && animationEnabled) {
            if (hueRotateAnimation.current) {
                hueRotateAnimation.current.stop();
            }
            hueRotateMotionValue.set(0);
            hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
                duration: animationDuration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                onUpdate: (value: number) => {
                    if (feColorMatrixRef.current) {
                        feColorMatrixRef.current.setAttribute("values", String(value));
                    }
                }
            });

            return () => {
                if (hueRotateAnimation.current) {
                    hueRotateAnimation.current.stop();
                }
            };
        }
    }, [animationEnabled, animationDuration, hueRotateMotionValue]);

    return (
        <div
            className={className}
            style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                background: "#000",
                ...style
            }}
        >
            {/* SVG Filter Definition */}
            <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
                <defs>
                    <filter id={id} x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence
                            type="turbulence"
                            baseFrequency="0.006 0.009"
                            numOctaves="3"
                            seed="2"
                            result="turbulence"
                        />
                        <feColorMatrix
                            ref={feColorMatrixRef}
                            in="turbulence"
                            type="hueRotate"
                            values="0"
                            result="hueRotated"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="hueRotated"
                            scale={displacementScale}
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="displaced"
                        />
                        <feGaussianBlur in="displaced" stdDeviation="2" />
                    </filter>
                </defs>
            </svg>

            {/* Single unified animated layer - no mask, just pure color with turbulence */}
            <div
                style={{
                    position: "absolute",
                    top: "-100%",
                    left: "-100%",
                    width: "300%",
                    height: "300%",
                    filter: animationEnabled ? `url(#${id})` : "none",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${color} 0%, transparent 70%)`,
                    }}
                />
            </div>

            {/* Noise texture overlay */}
            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("/noise-texture.png")`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 3,
                        pointerEvents: "none",
                        mixBlendMode: "overlay"
                    }}
                />
            )}
        </div>
    );
}
