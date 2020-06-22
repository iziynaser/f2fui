<template>
    <div>
            <div  v-if="comments.length>0">                
                <b-list-group >
                  <b-list-group-item v-for="comment in comments" :key="comment.title">
                    <b-row>  
                    <b-col>
                        <div>
                            <b v-if="comment.nickName!==null">{{comment.nickName}}</b>
                            <b v-else>guest user</b>
                        </div>
                        <div>
                            date :{{comment.dateCreated}}
                        </div>                            
                    </b-col>
                    <b-col>
                        <div>
                          <div>
                            <span class="border-0">
                            <b>  {{comment.subject}} </b>                             
                            </span>
                          </div>

                          <div> 
                              <span class="border-1 border-bottom border-dark"></span>
                          </div>

                          <div v-if="comment.benefits">
                            <div class="text">benefits</div>
                            <b-list-group horizontal flush>
                              <b-list-group-item v-for="ben in comment.benefits.split(',')" :key="ben">
                                  {{ben}}
                              </b-list-group-item>
                            </b-list-group>                            
                          </div>

                          <div v-if="comment.disadvatages">
                            <div class="text font-weight-bold">disadvatages</div>
                            <b-list-group horizontal flush>
                              <b-list-group-item v-for="upse in comment.disadvatages.split(',')" :key="upse" >
                                  {{upse}}
                              </b-list-group-item>
                            </b-list-group>
                          </div>

                          <div v-html="comment.body"></div>
                          <div>
                            does this post useful?
                            <b-button size="sm" :pressed.sync="noButtonPressesd" variant="outline-dark">
                                no 
                                <b-badge v-if="comment.numberOfDisLikes===null" variant="danger" pill>0</b-badge>                                
                                <b-badge v-else variant="danger" pill>{{comment.numberOfDisLikes}}</b-badge>                                
                            </b-button>

                            <b-button size="sm" :pressed.sync="yesButtonPressed" variant="outline-success">
                                yes 
                                <b-badge v-if="comment.numberOfLikes===null" variant="success" pill>0</b-badge>                                                                
                                <b-badge v-else variant="success" pill>{{comment.numberOfLikes}}</b-badge>                                                                
                            </b-button>
                          </div>
                        </div>
                    </b-col>  
                    </b-row>    
                  </b-list-group-item>
                </b-list-group>                
            </div>
    </div>
</template>

<script>
export default {
    name:'viewComment',
    props:{
            comments:[]
          } ,
    data(){
      return {
        
      }
    } ,
    methods:{

    }      
}
</script>

<style scoped>

</style>