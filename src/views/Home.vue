<template>
    <v-container fluid class="pa-0">
        <v-row>
            <v-col v-for="item in 7" :key=item>
                <app-card></app-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Card from '../components/Card'
export default {
    components: {
        appCard: Card
    }
}
</script>

<style>

</style>