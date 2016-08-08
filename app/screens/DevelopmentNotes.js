
import React from 'react';

export const DevelopmentNotes = () => (
  <div className = "container m-t-2">
    <h2>Development Notes</h2>
    <ul>
      <li>Basic styles, kept very minimal. Leveraging Bootstrap to get up and running quickly.</li>
      <li>Took some liberties with the xs and sm breakpoints to simply have something that is functional and classy.</li>
      <li>Not an exact match to all the functionality on the actual Frontify site. On some breakpoints the Frontify site actually doesn't behave particularly well.</li>
      <li>Can look a bit wonky on iPad portrait (between 970 and 1020ish pixels). Given more time and some additional custom breakpoint work I could smooth that out. Though, I would probably want to have a discuss as to the practicality and usefulness of this expanding navigation for such few navigation items in the first place.</li>
    </ul>
  </div>
);
