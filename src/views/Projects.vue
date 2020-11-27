<template>
  <div class="projects">
    <v-container class="my-6">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="project in projects" :key="project.name" link :to="project.link">
          <v-card text class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="220"> 
                <img :src="project.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <h1 class="heading font-weight-bold">{{ project.name }}</h1>
              <div class="black--text">{{ project.description }}</div>
            </v-card-text>
            <v-card-actions>
               <v-btn text color="blue">
                <v-icon small left>mdi-folder</v-icon>
                <span>See More</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "Projects",
        data(){
    return{
      projects: [
        { name: 'Calculator', description: 'A calculator using HTML & CSS', avatar: './calculator.png', link: 'https://github.com/KingAJ19/Calculator' },
        { name: '3D Soccer Player Slides', description: 'A slideshow of my favorite soccer players using JS, HTML & CSS', avatar: '/slides.png', link: '' },
        { name: 'Javascript Todo List', description: 'A simple todo list using JavaScript', avatar: '/todo.png', link: '' },
        { name: 'Asaph Franks', description: 'Anele is one word..."Driven". If he really wants to do something he will push himself to do it. He is also a super fun person to be around.', avatar: './Asaph.jpg', link: '' }
        
      ]
    }
  }
    }
</script>

<style scoped>

</style>