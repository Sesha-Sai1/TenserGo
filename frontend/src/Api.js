const API_URL = "http://localhost:5000";

export const getEmails = async () => {
  try {
    const response = await fetch(`${API_URL}/emails/history`, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch emails:", error);
    throw error; // Rethrow the error so the caller can handle it
  }
};

export const sendEmail = async (email) => {
  try {
    const response = await fetch(`${API_URL}/emails/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(email),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error; // Rethrow the error so the caller can handle it
  }
};
