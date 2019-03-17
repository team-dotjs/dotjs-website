---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
elements:
    -
        template: hero-home.html
        data:
            intro: d<span class="dot"></span>tjs is an awesome web + app development agency in the west midlands.
            button_label: view more
            button_link: #
    -
        template: services.html
        data: 
            intro: we create cool stuff.
            services:
                -
                    text: ios + android app<br/>development
                    class: triangle
                -
                    text: graphic and ux<br/>design
                    class: accent circle
                -
                    text: wordpress website<br/>development
                    class: square
                -
                    text: social media<br/>marketing
                    class: accent cross
                -
                    text: open source<br/>contributors
                    class: circle semi
---