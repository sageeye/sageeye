<template>
    <nav class="navbar bg_color is-fixed-top" role="navigation" :class="{change_nav_color: scrollPosition > 200}" aria-label="main navigation">
        <div class="navbar-brand logo_position">
            <a class="navbar-item" href="/">
                <logo />
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu is-capitalized "  :class="{ 'is-active': showNav }">
            <div id="nav_bar" class="navbar-end nav_item_position">
                <a href="#WhySageye" class="navbar-item navbar-item_text is-size-5" @click="showNav = !showNav">
                   why?
                </a>
                <a class="navbar-item navbar-item_text  none is-size-5">
                    how?
                </a>
                <a class="navbar-item navbar-item_text  none is-size-5">
                    team
                </a>
                <a class="navbar-item navbar-item_text  none is-size-5">
                    story seeker
                </a>
                <a href="#StoryBuilders" class="navbar-item navbar-item_text is-size-5" @click="showNav = !showNav">
                    story builders
                </a>
                <a class="navbar-item navbar-item_text none is-size-5">
                    subscribe
                </a>
                
            </div>
        </div>
    </nav>
</template>

<script>
import logo from './logo.vue'
import $ from 'jquery';
export default {
    name: 'NavBar',
    mounted() {
        window.addEventListener('scroll', this.updateScroll);

        $("#nav_bar a").click(function() {
            var target = $(this).attr('href');
            
            $('html, body').animate({
                scrollTop: $(target).offset().top - 95
            }, 1000);
            $("a").css("color","");
            $(this).css("color","#f25b24");
        });
    },
    data() {
        return{
            showNav: false,
            scrollPosition: null
        }
    },
    components: {
        logo
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    }
}

</script>

<style scoped>

/* .active a, .navbar-item:hover {
  color: #f25b24 !important;
} */
.navbar-item{
    margin-left: 15px;
    margin-right: 15px;
}

.none {cursor: default;}

.active a {
  color: #f25b24 !important;
} 
.bg_color{
    background-color:#262626;
    height:6rem;
}
.navbar-item{
    color: #fff;
    font-family: "Proxima-Nova";
}


.change_nav_color {
    background-color:#262626;
}

a.navbar-item:hover{
     background-color:#262626;
     color:#fff;
}



.logo_position{
    position: relative;
    left: 1.4%;
}

@media screen and (max-width: 1023px) {   
    .navbar-burger span{
        color: #fff;
    }
    .navbar-menu{
        background-color:#262626;
    }
    .navbar-item{
        color: #fff;
    }   
    .logo_position{
        position: none !important;
        left: 0%  !important;
    }
}
   
@media screen and (min-width: 1024px){
    .nav_item_position{
        margin-right: 10% ;
    }
    .navbar-item_text {
        align-items: flex-end;
        display: flex;
    }
}



</style>
