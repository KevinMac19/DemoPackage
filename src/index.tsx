import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'demo-package' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const DemoPackage = NativeModules.DemoPackage
  ? NativeModules.DemoPackage
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return DemoPackage.multiply(a, b);
}
export function createCalendarEvent(a: string, b: string): Promise<number> {
  return NativeModules.DummyCalendarModule.createCalendarEvent(a, b);
}
