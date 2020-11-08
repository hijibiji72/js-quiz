
export default {
    settings: {
        max_seconds_per_question: 90
    },
    questions: [
        {
            type: 'multiple',
            title: 'Question 1',
            options: [
                {
                    id: 1,
                    title: 'Option 1'
                },
                {
                    id: 2,
                    title: 'Option 2'
                },
                {
                    id: 3,
                    title: 'Option 3'
                },
            ]
        },
        {
            type: 'multiple',
            title: 'Question 2',
            options: [
                {
                    id: 1,
                    title: 'Option 1'
                },
                {
                    id: 2,
                    title: 'Option 2'
                },
                {
                    id: 3,
                    title: 'Option 3'
                },
                {
                    id: 4,
                    title: 'Option 3'
                },
                {
                    id: 5,
                    title: 'Option 3'
                },
            ]
        },
        {
            type: 'single',
            title: 'Question 3',
            options: [
                {
                    id: 1,
                    title: 'True'
                },
                {
                    id: 2,
                    title: 'False'
                }
            ]
        }
    ]
}
