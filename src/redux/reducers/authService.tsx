// authService.ts

export const fakeLogin = async (username: string, password: string): Promise<{ username: string }> => {
    return new Promise<{ username: string }>((resolve, reject) => {
      setTimeout(() => {
        if (username === 'validUsername' && password === 'validPassword') {
          resolve({ username });
        } else {
          reject('Invalid username or password');
        }
      }, 1000); // Simulate a 1-second delay for the login process
    });
  };
  