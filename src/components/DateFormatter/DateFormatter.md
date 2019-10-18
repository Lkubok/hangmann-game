
## DateFormatter

it expects as argument another component that will display data from props.data

### Example of use 

```

export class DateDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="test-app-hoc">Today is: {this.props.date}</div>;
  }
}

export default DateFormatter(DateDisplay);
```




