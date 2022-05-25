<template>
  <v-row>
    <v-col>
      <h2>Data Tables Challenge</h2>

      <p>See js/README.md for challenge instructions.</p>
      <v-data-table
        data-test-id="the-data-table"
        sort-by="lastNoteByCurrentUser"
        sort-desc
        :headers="headers"
        :items="allLoanApplications"
      >
        <!-- Format date fields to relative before rendering -->
        <template v-slot:item.lastNoteByCurrentUser="{ item }">
          {{ formatDate(item.lastNoteByCurrentUser) }}
        </template>

        <template v-slot:item.timeInStatus="{ item }">
          {{ formatDate(item.timeInStatus) }}
        </template>

        <template v-slot:item.updatedAt="{ item }">
          {{ formatDate(item.updatedAt) }}
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { DateTime } from 'luxon';

export default {
  data: () => ({
    // declare initial data here
    headers: [
      {
        text: 'App Id',
        value: 'id'
      },
      {
        text: 'Last Name',
        value: 'lastName'
      },
      {
        text: 'First Name',
        value: 'firstName'
      },
      {
        text: 'State',
        value: 'residenceState'
      },
      {
        text: 'Status',
        value: 'status'
      },
      {
        text: 'My Last Note',
        value: 'lastNoteByCurrentUser'
      },
      {
        text: 'Time In Status',
        value: 'timeInStatus'
      },
      {
        text: 'Task',
        value: 'oldestOpenTask'
      },
      {
        text: 'Last Updated',
        value: 'updatedAt'
      }
    ]
  }),

  computed: {
    ...mapGetters({
      allLoanApplications: 'allLoanApplications'
    })
  },

  methods: {
    ...mapActions({
      loadLoanApplications: 'loadLoanApplications'
    }),
    formatDate (date) {
      return DateTime.fromISO(date).toRelative();
    }
  }
};
</script>

<style>
/* Keep table headers aligned horizontally */
.v-data-table-header th {
  white-space: nowrap;
}
</style>
