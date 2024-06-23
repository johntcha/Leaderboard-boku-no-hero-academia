# Leaderboard for the Quollio frontend assignment

![Leaderboard](https://github.com/johntcha/quollio-frontend-assignment-leaderboard/blob/main/public/images/leaderboard.png)

## Comments

- I spent some time trying to use dynamical arbitrary values with TailwindCSS for translate (translate-y-[`cardHeight + padding + difference rank`rem]) but it seems it is not possible to do so because of the nature of TailwindCSS ([dynamic-class-names](https://tailwindcss.com/docs/content-configuration#dynamic-class-names)).

- I think it would be great to implement a debouce function to set some delay for the inputs so the useEffect is not triggered immediatly but only after a small delay when the user is not typing anymore.

- It would also be a good idea to avoid having negative value if an user type manually a negative value mostly for the interval. Also prevent the min points value to be always lower or equal to the max ones.

- It was really fun to work on this small project, I liked thinking of the smooth part and working with TailwindCSS.

- Total time spent: ~4-5 hours (not continuous) with maybe 1 hour trying to stick with dynamical TailwindCSS class for the translate-y part :grin:.
