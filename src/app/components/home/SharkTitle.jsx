import React from 'react'
import styles from '../../css/SharkTitle.module.css'

export default function SharkTitle() {
  return (
    <div>
          <div className={styles.wrapper}>
	<svg className={styles.svg}>
		<text x="50%" y="50%" dy=".35em" textAnchor="middle">
			shark
		</text>
	</svg>
</div>
    </div>
  )
}
