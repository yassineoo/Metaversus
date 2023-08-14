import { useEffect } from 'react';

export default  Home = () => {
  useEffect(() => {
    // Replace these hardcoded values with your actual credentials
    const phoneNumber = '+213663838507';
    const password = 'pass';

    // Simulate a login by sending a POST request to your login endpoint
    fetch('http://localhost:8080/api/auth/login/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        password: password,
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
