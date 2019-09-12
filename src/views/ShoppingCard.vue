<template>
    <v-container fluid >
        <v-row no-gutters>
            <v-col sm="6" xs="12">
                <v-col v-for="item in 1" :key="item">
                    <v-card
                        class="mx-auto"
                        max-width="350"
                    >
                        <v-img
                        class="white--text"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                        <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
                        </v-img>

                        <v-card-text>
                        <span>Number 10</span><br>
                        <span class="text--primary">
                            <span>Whitehaven Beach</span><br>
                            <span>Whitsunday Island, Whitsunday Islands</span>
                        </span>
                        </v-card-text>

                        <v-card-actions>
                        <v-btn
                            color="success"
                        >
                            Read More
                        </v-btn>
                        <v-btn
                            color="error"
                        >
                            Delete
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-col>
            <v-col sm="6" xs="12">
                <h1>Information about you</h1>
                <form>
                    <v-text-field
                        v-model="name"
                        label="Your Name *"
                    ></v-text-field>
                    <v-text-field
                        v-model="phone"
                        label="Phone number *"
                    ></v-text-field>
                    <v-text-field
                        v-model="comment"
                        label="Comment"
                    ></v-text-field>
                    <v-text-field
                        v-model="socialpage"
                        label="Social page"
                    ></v-text-field>

                    <v-sheet height="500" class="mb-4">
                        <v-calendar
                            type="month"
                            now="2019-01-08"
                            value="2019-01-08"
                            :events="events"
                        ></v-calendar>
                    </v-sheet>
                    
                    <v-btn color="success" class="mr-4" @click="submit">Buy</v-btn>
                    <v-btn color='error' @click="clear">clear</v-btn>

                </form>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data () {
        return {
            name: '',
            phone: '',
            coment: '',
            socialpage: '',
            items: [
                { text: 'Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
            events: [
                {
                    name: 'Vacation',
                    start: '2018-12-30',
                    end: '2019-01-02',
                },
                {
                    name: 'Meeting',
                    start: '2019-01-07',
                },
                {
                    name: '30th Birthday',
                    start: '2019-01-03',
                },
                {
                    name: 'New Year',
                    start: '2019-01-01',
                },
                {
                    name: 'Conference',
                    start: '2019-01-21',
                },
                {
                    name: 'Hackathon',
                    start: '2019-01-30',
                    end: '2019-02-01',
                },
            ],
        }
    },
    methods: {
        clear () {
            this.name = ''
            this.phone = ''
            this.coment = ''
            this.socialpage = ''
        }
    }
  }
</script>