<template>
    <div class="expenses">
      <h2>Your Expenses list</h2>
      <ul>
        <li v-for="expense in expensesData?.expenses || []" :key="expense.id">
          {{ expense.title }}
        </li>
      </ul>
      <p v-if="loading">Loading...</p>
      <p v-if="error">{{ error.message }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { watch } from 'vue';
  import { useQuery } from '@vue/apollo-composable';
  import { gql } from '@apollo/client/core';
  
  const getExpenses = gql`
    query {
      expenses {
        id
        title
        amount
        date
      }
    }
  `;
  
  const { result: expensesData, loading, error } = useQuery(getExpenses);
  
  watch(expensesData, (newResult: []) => {
    console.log("Fetched expenses:", newResult);
  });
  </script>
  