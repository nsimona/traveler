import React, { Component }  from 'react';

class Display extends Component {
    state= {
      result: this.props.data,
      selected: ''
    }

    filterResults = (value) => {
      const initialData = this.props.data;
      const result = initialData.filter( item => {
        const lc = item.name.toLowerCase();
        const filter = value.toLowerCase();
        return lc.includes(filter);
      })
      this.setState({ result });
      return result
    }

    selectItem = (code) => {
        this.setState({
            selected: code
        }, () => {
            this.props.onSelect(code);
        })
    }

    render() {
      return (
        <form onSubmit={(e) => {
            e.preventDefault(); 
            this.selectItem(this.state.result[0].code)
        }}>
          <input
            placeholder="Search..."
            onChange={e => this.filterResults(e.target.value)}
          />
          <div className="box-body">
            {this.state.result.map( item => {
                return <p className={this.state.selected === item.code ? 'selected' : null}
                            key={item.code} 
                            onClick={() => this.selectItem(item.code)}>
                            <span>{item.name}</span>    
                        </p>
            })}
          </div>
        </form>
        )
    }
}
export default Display; 