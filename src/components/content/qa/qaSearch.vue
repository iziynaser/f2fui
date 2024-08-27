<template>
    <div>
        <b-row class="my-1">
            <b-col>product id</b-col>
            <b-col>
                <b-input />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>{{ this.$t('fromDate') }}</b-col>
            <b-col>
                <b-input />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>{{ this.$t('toDate') }}</b-col>
            <b-col>
                <b-input />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>status : not replyed , replyed</b-col>
            <b-col>
                <b-input />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>type : question , reply</b-col>
            <b-col>
                <b-input />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>whos question</b-col>
            <b-col>
                <b-input />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>whos replied</b-col>
            <b-col>
                <b-input />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>action</b-col>
            <b-col>
                <b-button>see detail </b-button>
                <b-button>approve qa</b-button>
                <b-button>approve answer</b-button>
                <b-button>dcline qa</b-button>
                <b-button>decline aswer</b-button>
                <b-button>delete</b-button>
                <b-button>edit</b-button>
                <b-button></b-button>
                action : change status to ...
                action : freez for ...
                action : disable for ...
                action : enable for ...
            </b-col>
        </b-row>
        <b-input />
    </div>
</template>

<script>
export default {
    name: 'qaSearch',
    props: {
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped></style>