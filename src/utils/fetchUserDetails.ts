export const fetchUserDetails = async (token: string) => {
  try {
    const result = await fetch(
      'https://ke5ef2zrqvcxpm7xh5ytkj2czq0rytbr.lambda-url.us-east-1.on.aws/user',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};
