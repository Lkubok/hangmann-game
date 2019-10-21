
## TextFormatter

it expects as argument another component that will display data from props.data

### Example of use 

```

export class TextDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="test-app-hoc">Formatted text: {this.props.text}</div>;
  }
}

export default TextFormatter(TextDisplay);
```




