---
layout: post
title: Khan Academy JS
---
### Khan Academy JS
*Node.JS SDK for interacting with Khan Academy APIs*

#### Install this package.

``` bash
npm install khanacademyjs --save
```

### SDK documentation
* [Badges](#badges)
* [Videos](#videos)
* [Exercises](#exercises)

<a name="badges"></a>
#### Badges

**Retrieve a list of all badges**

``` javascript
var khanJS = require('khanacademyjs');
khanJS.badges.getBadges((err, response, badges)=>{
	console.log(`Found ${badges.length} badges`);
});
```

###### Sample badge object
``` json
{
      "badge_category": 1,
      "description": "Going Transonic",
      "name": "greattimedproblembadge",
      "points": 500,
      "safe_extended_description": "Quickly & correctly answer 10 exercise problems in a row (time limit depends on exercise difficulty)",
      "user_badges": [
          {
              "badge_name": "greattimedproblembadge",
              "date": "2011-05-04T06:02:05Z",
              "kind": "UserBadge",
              "points_earned": 500,
              "target_context": {
              },
              "target_context_name": "Addition 1",
              "user": "you@gmail.com"
          }
			]		
  }
```

**Retrieve a list of all badge categories.**

``` javascript
var khanJS = require('khanacademyjs');
khanJS.badges.getBadgeCategories((err, response, categories)=>{
	console.log(`Found ${categories.length} categories`);
});
```

###### Sample badge category object
``` json
	{
	    "category": 0,
	    "chart_icon_src": "/images/badges/meteorite-small-chart.png",
	    "description": "Meteorite badges are common and easy to earn when just getting started.",
	    "icon_src": "/images/badges/meteorite-small.png",
	    "large_icon_src": "/images/badges/meteorite.png",
	    "type_label": "Meteorite Badges"
	}
```

**Retrieve specific badge category identified by `categoryId`**

``` javascript
var khanJS = require('khanacademyjs');
khanJS.badges.getBadgeCategory(categoryId, (err, response, category)=>{
	console.log(`Found category`, category);
});
```


<a name="videos"></a>
#### Videos

##### Retrieve the video identified by `readable_id` or `youtube_id`.

``` javascript
var khanJS = require('khanacademyjs');
khanJS.videos.getVideo(videoReadableId, (err, response, video)=>{
	console.log(`Found video`, video);
});
```

##### Retrieve a list of all exercises associated with video `video_id`.

``` javascript
var khanJS = require('khanacademyjs');
khanJS.videos.getExercises(videoReadableId, (err, response, exercises)=>{
	console.log(`Found ${exercises.length} exercises`);
});
```

<a name="exercises"></a>
#### Exercises

##### Retrieve a filtered list of exercises in the library.

``` javascript
var khanJS = require('khanacademyjs');
khanJS.exercises.getExercises((err, response, exercises)=>{
	console.log(`Found ${exercises.length} exercises`);
});
```

##### Retrieve exercises identified by `exerciseName`.

``` javascript
var khanJS = require('khanacademyjs');
khanJS.exercises.getExercise(exerciseName, (err, response, exercises)=>{
	console.log(`Found ${exercises.length} exercises`);
});
```

##### Retrieve exercises identified by `exerciseName`.

``` javascript
var khanJS = require('khanacademyjs');
khanJS.exercises.getExercise(exerciseName, (err, response, exercise)=>{
	console.log(`Found exercise`, exercise);
});
```

##### Retrieve all the exercises that list `exerciseName` as a prerequisite.

``` javascript
var khanJS = require('khanacademyjs');
khanJS.exercises.getFollowupExercises(exerciseName, (err, response, followupExercises)=>{
	console.log(`Found ${followupExercises.length} followup exercises`);
});
```

##### Retrieve a list of videos associated with `exerciseName`.

``` javascript
var khanJS = require('khanacademyjs');
khanJS.exercises.getVideos(exerciseName, (err, response, videos)=>{
	console.log(`Found ${videos.length} videos`);
});
```

##### Retrieve a list of Perseus exercises used for autocomplete.

``` javascript
var khanJS = require('khanacademyjs');
khanJS.exercises.getPersusAutoComplete(exerciseName, (err, response, autoCompleteItems)=>{
	console.log(`Found ${autoCompleteItems.length} autocomplete items`);
});
```
