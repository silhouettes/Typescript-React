import React = require("react/addons");

// This is simply a helper that allows every
// component to inherit from a base-class instead
// of needing to mix-in the PureRenderMixin

class PureComponent<P, S> extends React.Component<P, S> {
    public /*override*/ shouldComponentUpdate(nextProps: P, nextState: S, nextContext: any): boolean {
        return React.addons.PureRenderMixin.shouldComponentUpdate.call(this, nextProps, nextState, nextContext);
    }
}

export = PureComponent;
