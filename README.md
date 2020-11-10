# About Matt

Hi. I am Matt. Here's you'll find my ever growing collection of unfinished side projects. :smile:

## Recent Projects

### Analyzing COVID-19 Data. 

Everyone's favourite project. 

I simply wanted to collect the data for each municipality over time and have a handy way of viewing the data

https://mattschlosser.github.io/alberta-covid/


### Electric Buses and Bus Data Visualization

I have been fascianted with looking into the open data provided by the City of Edmonton recently. Here are a few of 
the things that I've been working on.

#### Is my bus usually on time?

By keeping a personal database of the GTFS transit feeds, I have started to analyze certain aspects of the data. 
Below is a table showing the time for each day when the bus arrives at the stop where I usually board to get to work.
Taking the closet recorded point to the GPS coordinates of the bus stop. The scheduled arrival time is 8:37 a.m.
This shows that my bus usually arrives at the stop a few minutes early.

manhattan_distance|bus|date|time
--- | --- | --- | ---
9.80371093817212e-06|7161|2020-09-02|08:31:16
9.37270507819221e-05|4664|2020-09-03|08:29:08
2.17431640692212e-06|4657|2020-09-04|08:29:16
5.12314453118279e-05|7174|2020-09-08|08:34:53
0.000112800537110047|7066|2020-09-09|08:33:22
0.000116081298855875|4660|2020-09-10|08:31:02
2.88771972662971e-05|4830|2020-09-11|08:29:28
2.83432617180779e-05|7013|2020-09-14|08:34:10
5.98901367254712e-06|4803|2020-09-15|08:31:54
2.17431637850041e-06|7163|2020-09-18|08:35:29
0.000192375244139953|4579|2020-09-25|08:34:40
5.88608398430779e-05|4406|2020-09-28|08:30:43
0.00015804296877775|4300|2020-09-29|08:32:59
9.70078124993279e-05|4317|2020-09-30|08:30:55
3.97873535149529e-05|7074|2020-10-01|08:36:23
0.000161857666014953|7012|2020-10-02|08:31:08
9.80371093817212e-06|4658|2020-10-05|08:36:42
8.17490234368279e-05|7169|2020-10-06|08:31:41
0.000158042968749328|7078|2020-10-07|08:34:03
7.08388671881721e-05|7172|2020-10-08|08:31:28
2.45285644524529e-05|7196|2020-10-09|08:31:15
3.97873535149529e-05|7188|2020-10-13|08:32:21
9.31931152337029e-05|4761|2020-10-14|08:34:06
3.59726562777496e-05|4476|2020-10-15|08:39:35
9.26977538995288e-06|7174|2020-10-16|08:30:26
6.32094726285004e-05|4827|2020-10-19|08:31:41
6.64902343743279e-05|7012|2020-10-20|08:35:39
2.12478027350471e-05|7176|2020-10-21|08:29:31
6.32094726569221e-05|4761|2020-10-26|08:36:29




#### Electric Buses

Recently, my city added a few electric buses to their fleet. I created a simple app/tool to easily locate
the bus, show which route it's on, give an approximate distance, and show the locations of the buses on a map.

Check it out at [bus.mattschlosser.me/electric](https://bus.mattschlosser.me/electric)

#### Bus Data Visualization 

Recently, I have been working on a [bus visualization tool](https://bus.mattschlosser.me) to easily visualize
bus data. Here's a snapshot. 

![A map](https://github.com/mattschlosser/bus/blob/master/docs/img/datavis1.png "TEST")

My goal was to have an easy way to visualize the data between two different times. I started collecting data back in Feburary 2020, 
so I have been having fun comparing pre-pandemic levels of service with current ones.


## Testing Code Navigation 

```js
add_sumething(1,2);
// 3
```
