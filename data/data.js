var local_database=[
    {
        title: 'The CSS box - flex properties',
        author: 'none',
        date: 'none',
        category: 'html',
        content: 'No browser currently supports the box-Flex property. Firefox supports the alternative -moz-box-flex property. Safari, Opera, and Chrome support the alternative -webkit-box-Flex attribute. The box-Flex property specifies whether the box child elements are scalable. Tip: Scalable elements can be shortened or enlarged as the box shrinks or expands. Whenever there is extra space in the box, the scalable elements expand to fill that space.',
        id: 1001,
        source: 'https://www.w3school.com.cn/cssref/pr_box-flex.asp'
    },
    {
        title: 'HTML Encoding (Character set)',
        author: 'none',
        date: 'none',
        category: 'html',
        content: 'Iso-8859-1 is the default character set for HTML 4. This character set supports 256 different character codes. HTML 4 also supports UTF-8. ANSI (Windows-1252) is the original Windows character set. ANSI is the same as ISO-8859-1, except that ANSI has 32 additional characters. The HTML5 specification encourages Web developers to use the UTF-8 character set, which covers almost every character and symbol in the world!',
        id: 1002,
        source: 'https://www.w3school.com.cn/html/html_charset.asp'
    },
    {
        title: 'CSS min-height Minimum height max-height Maximum height',
        author: 'none',
        date: 'none',
        category: 'popular',
        content: 'Sometimes we set up an object box so that the object cannot be stretched when there is no content, but the content is uncertain and the height cannot be fixed. In this case, we need CSS to set the min-height to support the object box. The minimum height will show the content when the content is small, and if the content is larger than the minimum height, the object will grow as the content increases.',
        id: 1003,
        source: 'http://www.divcss5.com/rumen/r422.shtml'
    },
    {
        title: 'Introduction',
        author: 'wechat',
        date: 'none',
        category: 'cloud',
        content: 'Developers can use Cloud Base to develop WeChat Mini Programs and Mini Games. This allows them to use cloud capabilities without having to set up a server.Cloud Base provides developers with a completely native cloud and WeChat support and reduces the need for backend and O&M operations. Without setting up a server, developing core business logic can be achieved by using APIs provided by the platform, allowing for the rapid launch and iteration of Mini Programs and Mini Games. At the same time, this feature is fully compatible with the cloud services already used by developers.',
        id: 1004,
        source: 'https://developers.weixin.qq.com/miniprogram/en/dev/wxcloud/basis/getting-started.html'
    },
    {
        title: 'Flex Layout Tutorial: Syntax section',
        author: 'Yi Fengruan',
        date: '2015-07-10',
        category: 'popular',
        content: 'Web layout is a key application of CSS. The traditional solution to layout, based on the box model, relies on the display property + position property + float property. It is very inconvenient for special layouts, such as vertical center, which is not easy to implement. In 2009, the W3C introduced a new solution, ----Flex layout, that enables easy, complete, and responsive implementation of a variety of page layouts. It is currently supported by all browsers, which means it is safe to use it now. Flex layouts will be the preferred solution for future layouts. This article covers its syntax, and the next article gives you Flex writing for common layouts. JailBreak has created a Demo for all the examples in this article. Flex, short for Flexible Box, is designed to provide maximum flexibility to Box models. Any container can be specified as a Flex layout. Elements with a Flex layout are called Flex containers, or "containers" for short. All of its child elements automatically become container members and are called Flex items, or "items." The container has two axes by default: a horizontal main axis and a vertical cross axis. The starting position of the spindle (where it intersects with the border) is called main start and the ending position is called main end; The starting position of the intersecting axis is called cross start and the ending position is called cross end. By default, items are arranged along the main axis. The main axis space occupied by a single project is called main size, and the cross axis space occupied is called cross size.',
        id: 1005,
        source: 'https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html'
    },
    {
        title: 'CSS Grid Layout tutorial',
        author: 'Yi Fengruan',
        date: '2019-03-25',
        category: 'home',
        content: 'The Grid is the most powerful CSS layout scheme. It divides web pages into grids that can be arbitrarily combined to create a variety of layouts. Effects that previously could only be achieved through complex CSS frameworks are now built into browsers. A Grid layout is similar to a Flex layout in that it can specify the location of multiple items within a container. But there are also important differences. Flex layout is an axis layout and can only specify the position of "items" against the axis, which can be considered as a one-dimensional layout. A Grid layout divides the container into "rows" and "columns", generates cells, and then specifies the cells "where the project resides", which can be thought of as a two-dimensional layout. The Grid layout is far more powerful than the Flex layout. Areas that use a grid layout are called containers. Inside the container, grid-positioned child elements are called "items". Note: a project can only be a top-level child of the container, not a child of the project, such as the element in the code above. Grid layout only works for projects.',
        id: 1006,
        source: 'https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html'
    },
    {
        title: 'JQuery Effect - Fade in and out',
        author: 'none',
        date: 'none',
        category: 'home',
        content: 'With jQuery, you can fade elements in and out. JQuery has four fade methods: fadeIn(), fadeOut(), fadeToggle() and fadeTo(). Grammar: $(selector). FadeIn (speed, callback); The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds. The optional callback argument is the name of the function that executes after fading completes.',
        id: 1007,
        source: 'https://www.w3school.com.cn/jquery/jquery_fade.asp'
    },

    {
        title: 'Creating New Cloud Base Instance via Template',
        author: 'none',
        date: 'none',
        category: 'home',
        content: 'Select an empty directory for the new project, enter the AppID (which is required to use Cloud Base), check QuickStart Cloud Base Project, and click Create to get a sample Mini Program that shows the basic capabilities of Cloud Base. Note that this Mini Program is different from the normal QuickStart Mini Program in the following ways:There is no visitor mode, and test number may not be used; The cloudfunctionRoot field is added to project.config.json to specify the directory where the cloud function is stored; The directory specified by cloudfunctionRoot has a special icon; Cloud Base capabilities are supported from base library 2.2.3 and later (97.3% coverage, refer to Compatibility)',
        id: 1008,
        source: 'https://developers.weixin.qq.com/'
    },
    {
        title: 'JQuery animate() method',
        author: 'none',
        date: 'none',
        category: 'popular',
        content: 'The jQuery animate() method is used to create custom animations. Grammar: $(selector). The animate ({params}, speed, the callback); The required params parameters define the CSS properties that form the animation. The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds. The optional callback argument is the name of the function to execute after the animation is complete.',
        id: 1009,
        source: 'https://www.w3school.com.cn/jquery/jquery_animate.asp'
    },
    {
        title: 'jQuery API',
        author: 'none',
        date: 'none',
        category: 'javascript',
        content: 'jQuery API,jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. If you are new to jQuery, we recommend that you check out the jQuery Learning Center.',
        id: 10010,
        source: 'https://api.jquery.com/'
    },
    {
        title: 'Vue.set( target, propertyName/index, value )',
        author: 'none',
        date: 'none',
        category: 'home',
        content: 'Adds a property to a reactive object, ensuring the new property is also reactive, so triggers view updates. This must be used to add new properties to reactive objects, as Vue cannot detect normal property additions (e.g. this.myObject.newProperty = hi).',
        id: 10011,
        source: 'https://vuejs.org/v2/api/#Vue-set'
    },
]
