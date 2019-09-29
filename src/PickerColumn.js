import React from 'react';
import PropTypes from 'prop-types';
import { findIndex } from './utils';

class PickerColumn extends React.Component {
  refScroll = null;

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.any,
    })).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    itemHeight: PropTypes.number.isRequired,
    columnHeight: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isMoving: false,
      startTouchY: 0,
      startScrollerTranslate: 0,
      ...this.computeTranslate(props)
    };
  }

  componentDidMount() {
    const { refScroll } = this;
    refScroll.addEventListener('touchstart', this.handleTouchStart, false);
    refScroll.addEventListener('touchmove', this.handleTouchMove, false);
    refScroll.addEventListener('touchend', this.handleTouchEnd, false);
    refScroll.addEventListener('touchcancel', this.handleTouchCancel, false);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isMoving) {
      return;
    }
    this.setState(this.computeTranslate(nextProps));
  }

  componentWillUnmount() {
    const { refScroll } = this;
    refScroll.removeEventListener('touchstart', this.handleTouchStart, false);
    refScroll.removeEventListener('touchmove', this.handleTouchMove, false);
    refScroll.removeEventListener('touchend', this.handleTouchEnd, false);
    refScroll.removeEventListener('touchcancel', this.handleTouchCancel, false);
  }

  computeTranslate = (props) => {
    const { options, value, itemHeight, columnHeight } = props;

    let selectedIndex = findIndex(options, (item) => item.value === value);
    if (selectedIndex < 0) {
      if (options.length) {
        // throw new ReferenceError();
        console.warn('Warning: "' + this.props.name + '" doesn\'t contain an option of "' + value + '".');
        this.onValueSelected(options[0].value);
        selectedIndex = 0;
      } else if (value !== undefined) {
        console.warn('Warning: "' + this.props.name + '" doesn\'t contain any options.');
        this.onValueSelected(undefined);
        selectedIndex = -1;
      }
    }
    return {
      scrollerTranslate: columnHeight / 2 - itemHeight / 2 - selectedIndex * itemHeight,
      minTranslate: columnHeight / 2 - itemHeight * options.length + itemHeight / 2,
      maxTranslate: columnHeight / 2 - itemHeight / 2
    };
  };

  onValueSelected = (newValue) => {
    this.props.onChange(this.props.name, newValue);
  };

  handleTouchStart = (event) => {
    const startTouchY = event.targetTouches[0].pageY;
    this.setState(({ scrollerTranslate }) => ({
      startTouchY,
      startScrollerTranslate: scrollerTranslate
    }));
  };

  handleTouchMove = (event) => {
    event.preventDefault();
    const touchY = event.targetTouches[0].pageY;
    this.setState(({ isMoving, startTouchY, startScrollerTranslate, minTranslate, maxTranslate }) => {
      if (!isMoving) {
        return {
          isMoving: true
        }
      }

      let nextScrollerTranslate = startScrollerTranslate + touchY - startTouchY;
      if (nextScrollerTranslate < minTranslate) {
        nextScrollerTranslate = minTranslate - Math.pow(minTranslate - nextScrollerTranslate, 0.8);
      } else if (nextScrollerTranslate > maxTranslate) {
        nextScrollerTranslate = maxTranslate + Math.pow(nextScrollerTranslate - maxTranslate, 0.8);
      }
      return {
        scrollerTranslate: nextScrollerTranslate
      };
    });
  };

  handleTouchEnd = (event) => {
    if (!this.state.isMoving) {
      return;
    }
    this.setState({
      isMoving: false,
      startTouchY: 0,
      startScrollerTranslate: 0
    });
    setTimeout(() => {
      const { options, itemHeight } = this.props;
      const { scrollerTranslate, minTranslate, maxTranslate } = this.state;
      let activeIndex;
      if (scrollerTranslate > maxTranslate) {
        activeIndex = 0;
      } else if (scrollerTranslate < minTranslate) {
        activeIndex = options.length - 1;
      } else {
        activeIndex = - Math.floor((scrollerTranslate - maxTranslate) / itemHeight);
      }
      this.onValueSelected(options[activeIndex].value);
    }, 0);
  };

  handleTouchCancel = (event) => {
    if (!this.state.isMoving) {
      return;
    }
    this.setState((startScrollerTranslate) => ({
      isMoving: false,
      startTouchY: 0,
      startScrollerTranslate: 0,
      scrollerTranslate: startScrollerTranslate
    }));
  };

  handleItemClick = (option) => {
    if (option.value !== this.props.value) {
      this.onValueSelected(option.value);
    }
  };

  renderItems() {
    const { options, itemHeight, value } = this.props;
    return options.map((option, index) => {
      const style = {
        height: itemHeight + 'px',
        lineHeight: itemHeight + 'px'
      };
      const className = `picker-item${option.value === value ? ' picker-item-selected' : ''}`;
      return (
        <div
          key={index}
          className={className}
          style={style}
          onClick={() => this.handleItemClick(option)}>{option.text}</div>
      );
    });
  }

  bindRef = (ref) => {
    this.refScroll = ref;
  }

  render() {
    const translateString = `translate3d(0, ${this.state.scrollerTranslate}px, 0)`;
    const style = {
      MsTransform: translateString,
      MozTransform: translateString,
      OTransform: translateString,
      WebkitTransform: translateString,
      transform: translateString
    };
    if (this.state.isMoving) {
      style.transitionDuration = '0ms';
    }
    return (
      <div className="picker-column">
        <div
          className="picker-scroller"
          style={style}
          ref={this.bindRef}
          >
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

export default PickerColumn;
