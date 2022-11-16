import React from 'react'

export const LimitedWordTextarea = ({ rows, cols, value, limit }) => {
    const [{ content, wordCount }, setContent] = React.useState({
        content: value,
        wordCount: 0
    });

    const setFormattedContent = React.useCallback(
        text => {
            let words = text ? text.split(' ').filter(Boolean) : [];
            if (words.length > limit) {
                setContent({
                    content: words.slice(0, limit).join(' '),
                    wordCount: limit
                });
            } else {
                setContent({ content: text, wordCount: words.length });
            }
        },
        [limit, setContent]
    );

    React.useEffect(() => {
        setFormattedContent(content);
    }, [setFormattedContent, content]);

    return (
        <>
            <textarea
                rows={rows}
                cols={cols}
                onChange={event => setFormattedContent(event.target.value)}
                value={content}
                className="w-full border-2 rounded-2 min-h-[200px] p-3"
            />
            <p className='absolute right-5 mt-[165px] text-muted p-1'>
                {wordCount}/{limit}
            </p>
        </>
    );
};

const Reusables = () => {
    return (
        <div>Reusables</div>
    )
}

export default Reusables
