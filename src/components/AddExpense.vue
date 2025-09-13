<template>
    <div class="add-expense">
        <h2>Hey,add your new expense</h2>
        <form @submit="submitExpense">
            <input type="text" placeholder="Add title" required>
            <input type="number" placeholder="Add amount" required>
            <input type="text" placeholder="Add date" required>
            <button type="submit" class="submitExpense">Submit Expense</button>
        </form>
    </div>
</template>

<script setup>
    import { defineModel } from 'vue'
    const model = definModel()
</script>