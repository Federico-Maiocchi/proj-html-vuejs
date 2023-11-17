<script>
import FooterMenu from './FooterMenu.vue';
import FooterMenuSocial from './FooterMenuSocial.vue';

export default {
    components: {
    FooterMenuSocial,
    FooterMenu
},

    data() {
        return {

            socialFooter: [
                {
                    icon: 'fa-brands fa-youtube',
                    href:  '#',
                },
                {
                    icon: 'fa-brands fa-twitch',
                    href:  '#',
                },
                {
                    icon: 'fa-brands fa-facebook',
                    href:  '#',
                },
                {
                    icon: 'fa-brands fa-instagram',
                    href:  '#',
                }
            ], 

            menuFooter1: {
                title: 'quick links',
                links: [
                    {
                        text: 'Games',
                        href: '#',
                    },
                    {
                        text: 'latest tournament',
                        href: '#',
                    },
                    {
                        text: 'Shop',
                        href: '#',
                    },
                    {
                        text: 'Blog',
                        href: '#',
                    },
                    {
                        text: 'Contact',
                        href: '#',
                    },

                ]
            },

            menuFooter2: {
                title: 'help',
                links: [
                    {
                        text: 'Faqa',
                        href: '#',
                    },
                    {
                        text: 'Terms & conditions',
                        href: '#',
                    },
                    {
                        text: 'Privacy',
                        href: '#',
                    },
                    
                ]
            },

            menuFooter3: {
                title: 'Follow us',
                links: [
                    {
                        text: 'Facebook',
                        href: '#',
                    },
                    {
                        text: 'Twitter',
                        href: '#',
                    },
                    {
                        text: 'Instagram',
                        href: '#',
                    },
                    {
                        text: 'Youtube',
                        href: '#',
                    },
                    {
                        text: 'Github',
                        href: '#',
                    },

                ]
            }
  
        }
    },

    created() {
       
    },

    methods: {
        
    },

    mounted() {
    
    },

}
</script>

<template>
    
    <div class="footer-page">
        <div class="container-medium">
            <div class="row gap-12">
                <FooterMenuSocial :itemSocial="socialFooter"/>
                <FooterMenu class="col-2" :title="menuFooter1.title" :links="menuFooter1.links"/>
                <FooterMenu class="col-2" :title="menuFooter2.title" :links="menuFooter2.links"/>
                <FooterMenu class="col-2" :title="menuFooter3.title" :links="menuFooter3.links"/>
                <div class="col-2">
                    <ul>
                        <h4 class="title-list-contact">Contact</h4>
                        <li >Location:
                            <p class="color-white">4 mayfield, buckden, pe19 5sz</p>
                        </li>
                        <li>Phone:
                            <p class="color-white">(302)555-0107</p>
                        </li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>
    <div class="footer-page-end">
        <p>Copyright<font-awesome-icon icon="fa-regular fa-copyright" /> 2022 <span class="green-upper">futio</span>. All rights reserved.</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;



*[class^='col'] {
    padding-right: 20px;
}

.footer-page {
    padding: 200px 0 80px 0;
    background-color: #28344a;
    color: white;
    position: relative;

    .title-list-contact {
        font-size: 20px;
        color: white;
        text-transform: capitalize;
        font-weight: 100;
        padding-bottom: 20px;
    }


    .color-white {
        color: white;
        padding-top: 10px;
    }


    li {
        color: #94cb53;
        text-transform: uppercase;
        font-size: 15px;
        padding-bottom: 15px;
    }

}


.footer-page-end {
    padding: 50px 0;
    background-color: #1b212d;
    color: white;
    font-size: 12px;
    text-align: center;

    .green-upper {
        color: #94cb53;
        text-transform: uppercase;
    }
}
</style>