import axios from 'axios';

export const handleSignUp = async ({
  firstName,
  lastName,
  email,
  dateOfBirth,
  gender,
  password,
}: SignUpProps) => {
  try {
    const result = await fetch(
      'https://ke5ef2zrqvcxpm7xh5ytkj2czq0rytbr.lambda-url.us-east-1.on.aws/user/register',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          date_of_birth: dateOfBirth,
          gender,
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
