import React from 'react';
import GoogleMapReact from 'google-map-react';

///const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
    static defaultProps = {
        center: [56.76, 56.12],
        zoom: 11,
        key: 'AIzaSyDz2qRdSxYIKGF3uMPryLvycmbc1jjjbzg'
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    key={this.props.key}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;

/*
* bootstrapURLKeys={{ key: /* YOUR KEY HERE

                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />*/
