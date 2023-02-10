export function initializeApp(): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      console.log('timeout finished in initializer');
      resolve(true);
    }, 2000);
  });
}