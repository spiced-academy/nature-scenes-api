# Randomly Generated Data

## Usage

- `GET /api/v1/scenes/:index`: returns a JSON object with data
- `:index` should be between 0 and 49

### Returned data

Example for an index within range:

```json
{
  "image": "https://loremflickr.com/640/480/nature?lock=7726586610581504",
  "caption": "We sorobene gurahote elephant mouse hamster dilabelix elephant node bulemexoda colegefule ce dog dog quhega hamster nupu xu hoyadanoli linoq."
}
```

Example for an index out of range:

```json
{
  "error": "Not Found"
}
```
