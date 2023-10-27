/**
 * Filename: AdvancedToDoList.js
 * 
 * Description: This script implements a sophisticated and complex To-Do List application.
 *              It includes a user interface with various functionalities like creating,
 *              updating, and deleting tasks, setting deadlines, setting priorities, and more.
 */

// Declare global variables
let tasks = [];
let taskIdCounter = 1;

// Task object definition
class Task {
    constructor(id, title, priority, deadline, completed) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.deadline = deadline;
        this.completed = completed;
    }
}

// Function to add a new task
function addTask(title, priority, deadline) {
    const newTask = new Task(taskIdCounter, title, priority, deadline, false);
    tasks.push(newTask);
    taskIdCounter++;
}

// Function to update a task
function updateTask(id, title, priority, deadline) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
        tasks[taskIndex].title = title;
        tasks[taskIndex].priority = priority;
        tasks[taskIndex].deadline = deadline;
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Function to mark a task as completed
function completeTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
        tasks[taskIndex].completed = true;
    }
}

// Function to retrieve all tasks
function getAllTasks() {
    return tasks;
}

// Function to filter tasks by completion status
function getTasksByCompletionStatus(completed) {
    return tasks.filter(task => task.completed === completed);
}

// Function to filter tasks by priority
function getTasksByPriority(priority) {
    return tasks.filter(task => task.priority === priority);
}

// Function to sort tasks by deadline (ascending)
function sortTasksByDeadline() {
    tasks.sort((a, b) => a.deadline - b.deadline);
}

// Function to print tasks
function printTasks() {
    console.log("Current Tasks:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}`);
        console.log(`Title: ${task.title}`);
        console.log(`Priority: ${task.priority}`);
        console.log(`Deadline: ${task.deadline}`);
        console.log(`Completed: ${task.completed}`);
        console.log("------------------");
    });
}

// Usage example:

// Add some tasks
addTask("Buy groceries", "High", new Date(2022, 5, 15));
addTask("Finish project", "Medium", new Date(2022, 4, 30));
addTask("Clean the house", "Low", new Date(2022, 6, 10));

// Update a task
updateTask(1, "Buy new laptop", "High", new Date(2022, 6, 20));

// Complete a task
completeTask(2);

// Delete a task
deleteTask(3);

// Sort tasks by deadline
sortTasksByDeadline();

// Print all tasks
printTasks();