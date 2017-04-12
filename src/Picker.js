import React, { PropTypes } from 'react';
import PickerColumn from './PickerColumn';

class Picker extends React.Component {
  static propTyps = {
    optionGroups: PropTypes.object.isRequired,
    valueGroups: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    itemHeight: PropTypes.number,
    height: PropTypes.number
  };

  static defaultProps = {
    itemHeight: 36,
    height: 216
  };

  constructor(props) {
    super(props);

    this.state = this.transformState(props);
  }

  transformState = (props) => {
    const { optionGroups } = props;

    const state = {
      optionGroups: {},
    };

    for (let name in optionGroups) {
      if (Object.prototype.hasOwnProperty.call(optionGroups, name)) {
        state.optionGroups[name] = optionGroups[name].map(item => (
          typeof item === 'string' ? { text: item, value: item } : item
        ));
      }
    }

    return state;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.optionGroups !== this.props.optionGroups) {
      this.setState(this.transformState(nextProps));
    }
  }

  renderInner() {
    const { valueGroups, itemHeight, height, onChange } = this.props;
    const { optionGroups } = this.state;
    const highlightStyle = {
      height: itemHeight,
      marginTop: -(itemHeight / 2)
    };
    const columnNodes = [];
    for (let name in optionGroups) {
      columnNodes.push(
        <PickerColumn
          key={name}
          name={name}
          options={optionGroups[name]}
          value={valueGroups[name]}
          itemHeight={itemHeight}
          columnHeight={height}
          onChange={onChange} />
      );
    }
    return (
      <div className="picker-inner">
        {columnNodes}
        <div className="picker-highlight" style={highlightStyle}></div>
      </div>
    );
  }

  render() {
    const style = {
      height: this.props.height
    };

    return (
      <div className="picker-container" style={style}>
        {this.renderInner()}
      </div>
    );
  }
}

export default Picker;
