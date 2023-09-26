export const fetchLocation = async (geocode: string) => {
  try {
    const result = await fetch(
      `https://ke5ef2zrqvcxpm7xh5ytkj2czq0rytbr.lambda-url.us-east-1.on.aws/location?location=${geocode}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};
