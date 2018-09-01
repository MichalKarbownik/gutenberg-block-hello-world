const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload } = wp.editor;
const { ColorPalette } = wp.components;

registerBlockType('firstgutyblocks/hero-image', {
    title: "Hero Image Block",
    icon: 'format-image',
    category: 'common',

    attributes: {
        textString: {
            type: 'array',
            source: 'children',
            selector: 'h2',
        },
        fontColor: {
            type: 'string',
            default: "" // let's get rid of the annoying orange
        },
        backgroundImage: {
            type: 'string',
            default: null, // no image by default!
        },
        overlayColor: { // new!
            type: 'string',
            default: 'orange'
        }
    },


    edit(props) {

        const {
            setAttributes,
            className
        } = props;
        const { textString, fontColor, overlayColor, backgroundImage } = props.attributes;

        function onTextChange(changes) {
            setAttributes({
                textString: changes
            });
        }

        function onTextColorChange(changes) {
            setAttributes({
                fontColor: changes
            })
        }

        function onOverlayColorChange(changes) {
            setAttributes({
                overlayColor: changes
            })
        }

        function onImageSelect(imageObject) {
            setAttributes({
                backgroundImage: imageObject.sizes.full.url
            })
        }

        return ([
            <InspectorControls>
                <div>
                    <strong>Select a font color:</strong>
                    <ColorPalette
                        value={fontColor}
                        onChange={onTextColorChange}
                    />
                </div>
                <div>
                    <strong>Select an overlay color:</strong>
                    <ColorPalette
                        value={overlayColor}
                        onChange={onOverlayColorChange}
                    />
                </div>
                <div>
                    <strong>Select a background image:</strong>
                    <MediaUpload
                        onSelect={onImageSelect}
                        type="image"
                        value={backgroundImage}
                        render={({ open }) => (
                            <button onClick={open}>
                                Upload Image!
                            </button>
                        )}
                    />
                </div>
            </InspectorControls>,
            <div
                className={className}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div
                    className="overlay"
                    style={{background: overlayColor}}
                />
                <RichText
                    tagName="h2"
                    className="content"
                    value={textString}
                    onChange={onTextChange}
                    placeholder="Enter your text here!"
                    style={{ color: fontColor }}
                />
            </div>
        ]);
    },

    save(props) {

        const { className } = props;
        const { textString, fontColor, overlayColor, backgroundImage } = props.attributes;

        return (
            <div
                className={className}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div
                    className="overlay"
                    style={{background: overlayColor}}
                />
                <h2 class="content" style={{ color: fontColor }}>{textString}</h2>
            </div>
        );
    }
})