# Randomly Generated Data: Nature Scenes

## Live Version

- You can find this API deployed [on Heroku](https://spiced-nature-scenes-ade32f635b18.herokuapp.com/)

## Usage

- `GET /api/v1/scenes/:index`: returns a JSON object with data
- `:index` should be between 0 and 49

### Returned data

Example for an index within range:

```json
{
  "id": 1,
  "image": "https://loremflickr.com/640/480/nature?lock=7726586610581504",
  "caption": "We sorobene gurahote elephant mouse hamster dilabelix elephant node bulemexoda colegefule ce dog dog quhega hamster nupu xu hoyadanoli linoq.",
  "nextId": 2
}
```

Example for an index out of range:

```json
{
  "error": "Not Found"
}
```
