export interface userLog {
  email: string;
  password: string;
}

export const loginFn = async (data: userLog) => {
  try {
    const response = await fetch("url/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const changePassword = async (email: string) => {
  try {
    const response = await fetch("url/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};
