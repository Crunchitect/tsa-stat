export async function fetchRankingJSON(params: { [k: string]: number }) {
    const TWO_YEARS = 63072000000 as const;
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

    const startDate = new Date(Date.now() - TWO_YEARS);
    const startDateDay = startDate.getDate().toString().padStart(2, '0');
    const startDateMonth = MONTHS[startDate.getMonth()];
    const startDateYear = startDate.getFullYear().toString().slice(-2);
    const startDateFormatted = `${startDateDay}/${startDateMonth}/${startDateYear}`;

    let formattedParams: { [k: string]: string } = { TimestdF: '' };
    for (const key in params) {
        formattedParams[key] = params[key].toString();
    }
    const slug = await fetch(
        'http://swimming.or.th/Index/CheckRank?' +
            new URLSearchParams({
                draw: '1',
                start: '0',
                length: '10',
                CompetitionEvent: JSON.stringify(formattedParams),
                startDate: startDateFormatted,
            }).toString(),
        { method: 'POST' }
    );

    const data = await slug.json();
    return data;
}
