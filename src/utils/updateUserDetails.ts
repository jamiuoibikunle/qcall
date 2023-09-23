export const updateUserDetails = async ({
  token,
  firstName,
  lastName,
  email,
  dateOfBirth,
  gender,
}: any) => {
  try {
    const result = await fetch(
      'https://ke5ef2zrqvcxpm7xh5ytkj2czq0rytbr.lambda-url.us-east-1.on.aws/user',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          date_of_birth: dateOfBirth,
          gender,
        }),
      },
    );
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};
