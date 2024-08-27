<template>
    <div>
        <b-row class="my-1">
            <b-col>
                <label for="question"> {{ $t('qa_c_question') }} </label>
            </b-col>
            <b-col>
                <b-input id="question" />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>
                <label for="briefanswer">{{ $t('qa_c_breif') }}</label>
            </b-col>
            <b-col>
                <b-input id="briefanswer" />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>
                <label for="additionalanswer">{{ $t('qa_c_addition') }}</label>
            </b-col>
            <b-col>
                <b-input id="additionalanswer" />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col></b-col>
            <b-col></b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>
                <label for="selectcategory">{{ $t('qa_c_selecCat') }}</label>
            </b-col>
            <b-col>
                <b-input id="selectcategory" />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>
                <label id="selectcontent">{{ $t('qa_c_selectCon') }}</label>
            </b-col>
            <b-col>
                <b-input id="selectcontent" />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>
                <label for="selectproduct"> {{ $t('qa_c_selectProd') }}</label>
            </b-col>
            <b-col>
                <b-input id="selectproduct" />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col>{{ $t('qa_c_status') }}</b-col>
            <b-col>
                <b-button>{{ this.$t('qa_c_approved') }}</b-button>
                <b-button>{{ this.$t('content_s_published') }}</b-button>
                <b-button>{{ this.$t('qa_c_deactive') }}</b-button>
                <b-button>{{ this.$t('qa_c_active') }}</b-button>
                <b-button>declined</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'qaContent',
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