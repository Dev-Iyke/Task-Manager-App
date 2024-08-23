
# Pseudocode for Task Management Application

## 1. Initialization
- **Initialize State Variables:**
  - `tasks`: A list to store all tasks.
  - `pendingTasks`: A list to store tasks with status 'pending'.
  - `completedTasks`: A list to store tasks with status 'completed'.

## 2. Task Creation
- **Create a New Task:**
  - Capture task details (`title`, `details`, `status`).
  - Generate a unique `id` for the task.
  - Add the new task to the `tasks` list.
- **Check Task Status:**
  - If status is 'pending', add the task to `pendingTasks`.
  - If status is 'completed', add the task to `completedTasks`.

## 3. Displaying Tasks
- **Show All Tasks:**
  - Iterate through the `tasks` list and display each task.
- **Show Pending Tasks:**
  - Filter the `tasks` list for tasks with status 'pending'.
  - Display the filtered tasks.
- **Show Completed Tasks:**
  - Filter the `tasks` list for tasks with status 'completed'.
  - Display the filtered tasks.

## 4. Task Status Management
- **Toggle Task Status:**
  - Identify the task to toggle based on its `id`.
- **Switch Status:**
  - If the current status is 'pending':
    - Change status to 'completed'.
    - Move the task from `pendingTasks` to `completedTasks`.
  - If the current status is 'completed':
    - Change status to 'pending'.
    - Move the task from `completedTasks` to `pendingTasks`.
  - Update the `tasks` list with the new status.

## 5. Task Deletion
- **Delete a Task:**
  - Identify the task to delete based on its `id`.
  - Remove the task from the `tasks` list.
- **Remove from Specific Status List:**
  - If the task is in `pendingTasks`, remove it from that list.
  - If the task is in `completedTasks`, remove it from that list.

## 6. Navigation Between Pages
- **Navigate to Different Pages:**
  - Use routing to navigate between the 'All Tasks', 'Pending Tasks', and 'Completed Tasks' pages.

## 7. Error Handling and Debugging
- **Handle Errors:**
  - Ensure all tasks are properly added, deleted, or toggled without issues.
  - Debug any overlapping or unexpected deletions by checking the logic in the `handleStatus` and `handleDelete` functions.
