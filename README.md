<Slide: introductoin - 1>
Hi, my name Denis. My topic of presentation is Canvas.

In my presentation I wanna anwsers to a few questions
and show how to do simple figures and preloader with canvas.

<first question - 2.1>
First of all, What is Canvas? 
Canvas is tag element of html, which is used to draw graphics by dots coordinates, 
usually it's use with JavaScript.

<Slide: apple - 2.2>
Initially canvas was introduced by Apple  in 2004, when they represent their project 
Mac OS X Webkit.

<Slide: browsers - 2.3>
Despite that canvas is old element of html, but not supporting in old versions of browsers.

<Slide: second question - 3.1>
What can i create with canvas?

<Slide: gif - 3.2>
With canvas you can create lines, cubes, circles,
graphics, polygons, two-dimensional and three-dimensional animations.

<Slide: piskel - 3.3>
Also you can create editor or animation editor like piskel app.

<Slide: game - 3.4>
or you can create games like free rider HD or angry birds, or snake,
and another popular games, which made with 
canvas you can see in link, which call "more apps".

<Slide: question - 4.1>
What are advantages and disadvantages of using canvas?
Here i say about two essential advantages and disadvantages of using canvas.

<Slide: Advantages - 4.2>
Advantages.
First is it, canvas is good choice when you need to draw many dynamic elements
on the web page. Second is it, canvas is element of html and if user visit your site
with canvas animations or elements, then he is not need to install third plugins 
and it's very important and convienient, because if it compare with flash, flash require
it and user haven't flash plugin then he shouldn't see anything.

<Slide: Disadvantages - 4.3>
Disadvantages.
First is it, if you make movement with figure. You need use method clearRect
to clear canvas after each movement and sometimes it can be beat perfomance on web page.
Second is it, canvas is dependent of screen size of user and sometimes it can be 
difficult to make adaptive with canvas.

<Slide: coding - 5.1>
Now a bit coding.

<Slide: Line - 5.2.1>
Line.

<Slide: html - 5.2.2>
First of all, we declared canvas element in html, which has essential three attributes.
First is id, id is need to take our html element in js file. Second is width with value 
250 and height with value 30, it's need to set size of canvas screen, by the way
if I not setting width and height, then they would be set by standart and width
would be 300 and height would be 150.

<Slide: js - 5.2.3>
Then js file. Here i declared two variables. First is line, it's need to take canvas from
html. Second is line context, it's need to get two-dimensional context to our line.
Then i used four methods. First is begin path. Begin path is need to say browser "here a new
element".
Then move to with two attributes. First is X coordinate with value 100 and the second argument
is Y coordinate with value 10. Move to method is need to set start point of line. Then line to
which setting end point of our line with X coordinate 200 and y coordinate 10. And then we say
"Draw it" with method stroke. And ye we see a simple line.

<Slide: triangle - 5.3.1>
Then how to a triangle.
<Slide: js - 5.3.2>
We go to js file take our element from html with variable triangle then take two-dimensional
context to triangle with variable triangle context. And then again begin path.
<Slide: triangle - 5.3.3>
Move to set start point, line to to make top line of triangle, then second line to, It's need
to draw right line of triangle. And then close path. Close path is need to connect our start 
and end points. And then use method fill, it's need to set color of our triangle. By the way
if i'am not using fill style with value yellow then triangle would be with black color.
And then use method stroke, stroke is need to draw triangle.

<circle - 5.4.1>
Then circle.

<Slide: js - 5.4.2>
Again take from html, get context, begin path and method arc.

<Slide: circle - 5.4.3>
Arc is need to draw our circle. First and second argument are need to set center of circle
with X coordinate 150 and Y coordinate 100. And third argument of arc method is need to set radius
of our circle with value 50. Then fourth and fiveth arguments are start and end angle of circle respectively
Then method fill with fill style red and stroke to draw it.

<Slide: preloader - 5.5.1>
Then preloader, now i show how to do a simple preloader like it with four methods of canvas.

<Slide: html - 5.5.2>
First of all, we go to html file. Here on line eleventh, i declared canvas element with 
3 attributes. A bit below i declared a div, which show number of uploading and then our script.

<Slide: js - 5.5.3>
Check js file. Here i, again, declared two variable. First is need to html element and second to
get two-dimensional context to our element. Then div, It's need to show number.
Then I wrote function which draw circle with same name and argument x. This x I used in method arc
and it hasn't number value, because our circle which move, from left to right, every time would be change.
In this function i used three method: begin path, to say"new element", arc, which draw circle and 
fill to give color. Then declared variable x. It's need to change position of element and then function,
which used interval per 10 milliseconds. It's need to give our preloader smooth animation. And here i use
method clear rect. To clear canvas element after each movement and then i used function draw circle,
where x is dependent of 200 pixels of 100%. And, after every interval, our x increment is better by one.
And then this value with div dot inner text, I show number, when x up to 100% or 200 pixel. Then preloader
is displayed none and web page is visible.

<Slide: question(info) - 6.1>
Where can i find information to learn canvas?
To learn canvas, I recommend to familiarize with MDN docs. 
It's need to give some information about canvas, what you can to do.
Or youtube tutorials, they are a lot and you  can see what you want.

<Slide: end - 7.1>
The end.
Thank you for attention. Buy
