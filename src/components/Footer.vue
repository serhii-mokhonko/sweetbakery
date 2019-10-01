<template>
<div>
<v-footer
    padless
    color="#f1c40f"
>
    <v-col
        cols="12"
        class="text-center"
    >
        <v-btn icon link class="ml-3" href="https://www.facebook.com/nina.mokhonko" target="_blank">
            <v-icon size="24px" color='#2980b9'>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon link class="ml-3" href="https://www.instagram.com/ninamokhonkocake/" target="_blank">
            <v-icon size="24px" color='#c0392b'>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon class="ml-3" @click="dialog = true">
            <v-icon size="24px" color='#34495e'>mdi-phone</v-icon>
        </v-btn>
    </v-col>
</v-footer>

    <v-dialog
        v-model="dialog"
        max-width="350px"
    >
        <v-card>
            <v-card-title class="text-center">
                <v-icon left>phone</v-icon>Call Me
            </v-card-title>
            <v-card-text class="text-center"><b>+380988414543</b></v-card-text>
            <v-card-actions>
            <v-btn
                block
                color="primary"
                text
                @click="dialog = false"
            >
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>

</template>

<script>
export default {
    data () {
        return {
            dialog: false
        }
    }
}
</script>