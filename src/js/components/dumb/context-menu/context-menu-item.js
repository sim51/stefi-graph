import React, {Component, PropTypes} from "react";
import Log from "~/services/log";
import "./style.less";

/**
 * Module logger.
 */
const log = new Log("Component.ContextMenuItem");

/**
 * Create a context menu.
 * <ContextMenu />
 */
class ContextMenuItem extends Component {

    /**
     * Constructor.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {id: _.uniqueId('context-menu-item')};
    }

    /**
     * Render phase
     */
    render() {
        return (
        )
    }
}

export default ContextMenuItem;

