#  Macro Tracker API Features

A full-stack calorie tracking app with user authentication, food search, diary logging, and daily summary dashboard.

---

### 1. Register

Registers a new user with name, email, and password.

![Register Screenshot](https://github.com/user-attachments/assets/97b8b669-e0f5-41d9-b1d5-0c15ea5d54e2)

---

### 2.  Login

Generates a JWT token upon successful login.

![Login Screenshot](https://github.com/user-attachments/assets/bd3086c0-f233-4096-a0e0-ac558e7c64ac)

---

### 3. Get User Profile

Fetches current user profile data.

![Profile Screenshot](https://github.com/user-attachments/assets/dec6829f-3ee7-4ee9-b261-a1a98edec514)

---

### 4. Update Profile

Update target calories, protein, carbs, and fat.

![Update Profile Screenshot](https://github.com/user-attachments/assets/fa4c13a7-91f4-46c6-8816-b8fc69552ac8)

---

### 5. Search Food by Name

**Endpoint:**  
`GET /api/foods?search=chicken`

Returns a list of matching food items from the database.

![Search Food Screenshot](https://github.com/user-attachments/assets/2efeff2c-019e-49a5-8b7e-10e9595d16ba)

---

### 6.  Add Diary Entry

**Endpoint:**  
`POST /api/diary`

Logs a food entry with quantity and meal type for a specific day.

![Add Diary Screenshot](https://github.com/user-attachments/assets/8d63e8b7-d12d-4e12-8a6f-34bc183fdec4)

---

### 7.  Dashboard Summary

**Endpoint:**  
`GET /api/dashboard?date=2025-07-08`

Fetches total calories, macros, water logs, and weight logs for the selected date.

![Dashboard Screenshot](![Screenshot 2025-07-07 130922](https://github.com/user-attachments/assets/c71facac-ceb2-4379-9a20-2248fb75d661)
)
