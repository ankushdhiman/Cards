//this is a type definition file for velocity animate. Jquery dependency has been removed

interface Velocity {
        velocity(name: string, options: Velocity.RegisteredEffectOptions): any;
        velocity(options: {properties: Velocity.Properties; options: Velocity.Options}): any;
        velocity(properties: Velocity.Properties, options: Velocity.Options): any;
        velocity(properties: Velocity.Properties, duration: number, easing: Velocity.Easing, complete?: Velocity.ElementCallback): any;
        velocity(properties: Velocity.Properties, duration: number, complete?: Velocity.ElementCallback): any;
        velocity(properties: Velocity.Properties, easing: Velocity.Easing, complete?: Velocity.ElementCallback): any;
        velocity(properties: Velocity.Properties, complete?: Velocity.ElementCallback): any;
}

interface VelocityStatic {
        Velocity: Velocity.VelocityStatic;
}

declare namespace Velocity {
        type Properties = Object;
        type Easing = string|number[];
        type ElementCallback = (elements: NodeListOf<HTMLElement>) => void;
        type ProgressCallback = (elements: NodeListOf<HTMLElement>, percentComplete: number, timeRemaining: number, timeStart: number, tweenValue: number) => void;
        type EffectCall =
                [Properties] |
                [Properties, number] |
                [Properties, EffectCallOptions] |
                [Properties, number, EffectCallOptions];

        interface EffectCallOptions {
                delay?: any;
                easing?: any;
        }

        interface CommonOptions {
                duration?: string|number;
                begin?: ElementCallback;
                complete?: ElementCallback;
                display?: string|boolean;
                delay?: number|boolean;
                mobileHA?: boolean;
                _cacheValues?: boolean;
                axis?: string;
                offset?: number;
        }

        interface Options extends CommonOptions {
                queue?: string|boolean;
                easing?: Easing;
                progress?: ProgressCallback;
                loop?: number|boolean;
        }

        interface RegisterEffectOptions {
                defaultDuration?: number;
                calls: EffectCall[];
                reset?: Object;
        }

        interface RegisteredEffectOptions extends CommonOptions {
                stagger?: number;
                drag?: boolean;
                backwards?: boolean;
        }

        interface SequenceCall {
                e: HTMLElement;
                p: Properties;
                o: SequenceOptions;
        }

        interface SequenceOptions extends Options {
                sequenceQueue?: boolean;
        }

        interface VelocityStatic {
                Sequences: any;
                animate(options: {elements: NodeListOf<HTMLElement>; properties: Properties; options: Options}): any;
                animate(elements: HTMLElement|NodeListOf<HTMLElement>, properties: Properties, options: Options): any;
                RegisterEffect(name: string, options: RegisterEffectOptions): VelocityStatic;
                RunSequence(sequence: SequenceCall[]): VelocityStatic;

                /**
                 * Get a hook value. Hooks are the subvalues of multi-value CSS properties.
                 * It features the same API as $.css().
                 */
                hook(element: HTMLElement, cssKey: string): string;

                /**
                 * Set a hook value. Hooks are the subvalues of multi-value CSS properties.
                 * It features the same API as $.css().
                 */
                hook(element: HTMLElement, cssKey: string, cssValue: string): void;
        }
}

declare var Velocity: any;

declare module 'velocity' {
  export = Velocity;
}