export const handleSignIn = async ({email, password}: SignInProps) => {
  try {
    const result = await fetch(
      'https://ke5ef2zrqvcxpm7xh5ytkj2czq0rytbr.lambda-url.us-east-1.on.aws/user/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    );
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};
