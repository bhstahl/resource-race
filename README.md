                     \\__.-"-._____  \\__.-"-._____
                      '-(_)---(_)--`   '-(_)---(_)--`
             \\__.-"-._____     \\__.-"-._____
              '-(_)---(_)--`     '-(_)---(_)--`

# Resource Race
An npm module for finding the fastest resource (url)


## Installing

```bash
npm install resource-race
```


## Using

```javascript
import race from 'resource-race';

let urls = ['https://apple.com','https://google.com', 'https://amazon.com'];

race(urls).then((winner) => {
    console.log(`${winner} won the race!`);
})
```

