import { useEffect } from 'react';

const  Home = () => {
  useEffect(() => {
    // Replace these hardcoded values with your actual credentials
    const phoneNumber = '+213663838507';
    const password = "312586";

    // Simulate a login by sending a POST request to your login endpoint
    fetch('https://d2b3-129-45-94-57.ngrok-free.app/api/auth/verify-phone-number', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        otp: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        // Assume the response contains the tokens
        const tokens = data;
        console.log(tokens);
        // Store refresh token in a cookie

        // Now you can use the access token for authenticated requests
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });

  }, []);

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='w-full max-w-md p-6 bg-white rounded-md shadow-md'>
        {/* No UI elements needed in this test */}
         hi al
      </div>
    </div>
  );
}

export default Home;