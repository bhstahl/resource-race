
                    \\__.-"-._____                                    \\__.-"-._____
     \\__.-"-._____  '-(_)---(_)--` \\__.-"-._____                .....'-(_)---(_)--`
      '-(_)---(_)--`                '-(_)---(_)--`

# Resource Race
Find the fastest resource amongst a group.

## Installing

```bash
npm install resource-race
```

## Using

```javascript
import race from 'resource-race';

const urls = [
    'https://cdn1.com/img.png',
    'https://cdn2.com/img.png',
    'https://cdn3.com/img.png'
];

race(urls).then((winner) => {
    console.log(`${winner} won the race!`);
});
```

